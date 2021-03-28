import './App.scss';
import React, {useState} from 'react'
import DocumentedComponent from './DocumentedComponent';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function App() {
  
  const [form, setForm] = useState()

  return (
    <div className="container">
      <h4 className='my-4'>Playing with JSDocs and better-docs template</h4>
      <Card className="my-4 ">
        <Card.Body>
          <Card.Title>Example of a Form Component With a JSDoc</Card.Title>
          <DocumentedComponent title="Test Documented Component" onSubmit={setForm} />
        </Card.Body>
      </Card>
      {form && <Card className="my-4 ">
        <Card.Body>
          <Card.Title>Form to be sent</Card.Title>
          <pre className={'p-2 bg-dark text-white'}>
            <code>
              {JSON.stringify(form, undefined, 2)}
            </code>
          </pre>
        </Card.Body>
      </Card>}
      <Button href={'/docs/index.html'}>Go to JSDocs</Button>
      
    </div>
  );
}

export default App;
