import { Button } from "./styles"

export const Variants = () => {
  return (
    <div>
      <div>
        <Button color={'purple'} size={'small'}>purple small</Button>
        <Button color={'red'} size={'medium'}>red medium</Button>
        <Button color={'black'} size={'big'}>black big</Button>
        <Button color={'blue'} size={'large'}>blue large</Button>
      </div>

      <div>
        <Button>Default</Button>
        <Button>Default</Button>
        <Button>Default</Button>
        <Button>Default</Button>
      </div>

      <div>
        <Button color={'red'} size={'big'}>red big</Button>
        <Button color={'red'}>red</Button>
        <Button size={'big'}>big</Button>
      </div>

    </div>
  )
}