"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bazed_af_1 = require("@bazed-ai/bazed-af");
// We are going to use the OneShotAgent,
// it's the simplest agent type - it just makes a call to the LLM and returns the result.
// Notice the `export default` - this is how the agent class must be exported.
class HelloAgent extends bazed_af_1.OneShotAgent {
    // Set the model used by the agent
    model = bazed_af_1.ModelType.GPT4Turbo;
    // Set the system prompt
    systemPrompt = "Your task is to explain why specific person is based. Speculate, limit your response to a sentence.";
    // Prepare the input for the LLM call
    async input() {
        return `Why is ${this.options.person} based?`;
    }
    // Process the output from the LLM call
    async output(answer) {
        return answer;
    }
}
exports.default = HelloAgent;
