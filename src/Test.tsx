import styled from 'styled-components'

type BtnProps = {
  principal: boolean
  fontSize?: string
}

const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'red')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BtnPerigo = styled(Btn)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Btn principal> Me clique </Btn>
      <Btn fontSize="14px" principal={false}>
        Cancelar
      </Btn>
      <BtnPerigo principal>Lol</BtnPerigo>
    </>
  )
}

export default Teste
