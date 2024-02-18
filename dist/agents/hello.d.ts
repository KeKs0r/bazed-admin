import { OneShotAgent, AgentOptions, ModelType } from "@bazed-ai/bazed-af";
interface HelloAgentOptions extends AgentOptions {
    person: string;
}
export default class HelloAgent extends OneShotAgent<HelloAgentOptions, // Define input type for the agent
string> {
    model: ModelType;
    systemPrompt: string;
    input(): Promise<string>;
    output(answer: string): Promise<string>;
}
export {};
