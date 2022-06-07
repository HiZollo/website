import styles from '../styles/Commands.module.css';

function MessageCommand (props: CommandNameProps) {
  return <code>z!{props.cmd}</code>
}

function SlashCommand (props: CommandNameProps) {
  return <code>/{props.cmd}</code>
}

function CommandInfo (props: CommandInfoProps) {
  let outputAliases = '';
  let outputUsage = '';
  if (!props.aliases?.length) outputAliases = '-'
  else for (const alias of props.aliases)
    outputAliases += `<code>z!${alias}</code><br />`;

  if (!props.usage?.length) outputUsage = '-'
  else for (const usage of props.usage)
    outputUsage += `<code>z!${props.cmd} ${usage}</code><br />`;

  return (
    <tr>
      <td><MessageCommand cmd={props.cmd} /></td>
      <td dangerouslySetInnerHTML={{
        __html: outputAliases
      }}></td>
      <td  dangerouslySetInnerHTML={{
        __html: props.description
      }}></td>
      <td dangerouslySetInnerHTML={{
        __html: outputUsage
      }}></td>
    </tr>
  );
}

function SlashCommandInfo (props: SlashCommandInfoProps) {
  return (
    <tr>
      <td><SlashCommand cmd={props.cmd} /></td>
      <td  dangerouslySetInnerHTML={{
        __html: props.description
      }}></td>
    </tr>
  )
}

interface CommandNameProps {
  cmd: string;
}

interface CommandInfoProps {
  cmd: string;
  aliases?: string[];
  description: string;
  usage?: string[];
}

interface SlashCommandInfoProps {
  cmd: string;
  description: string;
}

export { MessageCommand, SlashCommand, CommandInfo, SlashCommandInfo }
