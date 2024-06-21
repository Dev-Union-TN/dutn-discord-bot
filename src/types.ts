import { Client, Collection } from 'discord.js';

export interface Command {
  data: {
    name: string;
    description: string;
  };
  execute: (interaction: any) => Promise<void>;
}

export class TsClient extends Client {
  commands: Collection<string, Command> = new Collection();
}
