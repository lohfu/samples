import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';

ReactDOM.render(
  <form>
    <CheckboxGroup name="group01">
      <Checkbox value="one" label="One" />
      <Checkbox value="two" label="Two" />
      <Checkbox value="three" label="Three" />
      <Checkbox value="four" label="Four" />
    </CheckboxGroup>
  </form>
, document.getElementById('__mount'));
