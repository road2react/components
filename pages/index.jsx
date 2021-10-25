import ColoredText from '../components/ColoredText'
import ColoredTextWithChildren from '../components/ColoredTextWithChildren'

export default () => {
  return <div>
    <h1>Using Components</h1>
    {/* Check out these components under components/ColoredText */}
    <ColoredText color='red' text='Hello world'/>
    <ColoredText 
      color='purple' 
      text={ <span href='/'> You can also put a component inside a prop</span> }
    />

    <ColoredTextWithChildren color='orange'>
      <h2>Alternatively,</h2>
      <p>You can put elements inside your component <br/> 
      <p>But in order to do so, you need to add the "children" prop. Check out components/ColoredTextWithChildren</p>
      </p>
    </ColoredTextWithChildren>
  </div>
}
