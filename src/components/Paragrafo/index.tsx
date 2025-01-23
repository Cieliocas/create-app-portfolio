import { P } from './styles.ts'

export type Props = {
  children: string
}

const Paragrafo = (props: Props) => (
  <P>{props.children}</P>
)

export default Paragrafo
