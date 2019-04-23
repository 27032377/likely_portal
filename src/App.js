import React from 'react';
import { Button, Layout } from 'antd'
const { Header, Content, Footer } = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <Button type="primary">按钮</Button>
    </div>
  );
}

export default App;
