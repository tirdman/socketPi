import { subscribeToTimer, subscribeToDf } from './utils';
import React, { Component } from 'react';
import { Card } from 'antd';

class TimeFromServer extends Component {
  constructor() {
    super();
    this.state = {
      time: 'not defined yet',
      df: 'not defined yet',
    };
  }

  componentDidMount() {
    subscribeToTimer((err, answer) => {
      //console.log(answer);
      if (err) {
        this.setState({
          ...this.state,
          time: 'unknow. There are error from server: ' + err,
        });
        return;
      }

      this.setState({ ...this.state, time: answer.time });
    });

    subscribeToDf((err, answer) => {
      if (err) {
        this.setState({
          ...this.state,
          df: 'unknow. There are error from server: ' + err,
        });
        return;
      }
      this.setState({ ...this.state, df: answer.df });
    });
  }

  render() {
    return (
      <div className="App">
        <p>Source:
          <a style={{marginLeft: "10px"}} href="https://habrahabr.ru/company/ruvds/blog/333618/" target="_blank">
          Добротный риалтайм на React и Socket.io</a>
        </p>
        <Card
          title={<span style={{ fontSize: '30px' }}>Server Time</span>}
          bordered={false}
          style={{ width: '300' }}
        >
          <h2>{this.state.time}</h2>
        </Card>

        <Card
          title={<span style={{ fontSize: '30px' }}>Server Space</span>}
          bordered={false}
          style={{ width: '300' }}
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: this.state.df.replace(/(?:\r\n|\r|\n)/g, '<br />'),
            }}
          />
        </Card>
      </div>
    );
  }
}
//dangerouslySetInnerHTML={{__html: this.state.df.replace(/(?:\r\n|\r|\n)/g, '<br />')}}
export default TimeFromServer;
