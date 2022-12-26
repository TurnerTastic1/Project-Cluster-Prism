/**
 * This is a .mjs file for the reason we import modules from openai
 * Necessary to use import due to openai and eslint rules
 * TSC build still adds this to build/ directory
 */
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: 'who are you',
  temperature: 0.6,
});

// eslint-disable-next-line no-undef
console.log(completion.data.choices[0].text);

function generatePrompt(animal) {
  const capitalizedAnimal =
      animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`;
}