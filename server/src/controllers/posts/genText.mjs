/* eslint-disable no-undef */
/**
 * This is a .mjs file because we import modules from openai
 * Necessary to use import due to openai and eslint rules
 * TSC build still adds this to build/ directory
 */
import { Configuration, OpenAIApi } from "openai";
import 'dotenv/config';
 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_TOKEN, // Token deprecated
});
const openai = new OpenAIApi(configuration);
 
export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
 
  const text = req.body.text || '';
  if (text.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter valid text",
      }
    });
    return;
  }
 
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
 
