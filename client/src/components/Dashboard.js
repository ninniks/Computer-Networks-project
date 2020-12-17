import { connect } from 'react-redux';
import { Component } from 'react'
import { Dimmer, Loader, Image, Segment, Message } from 'semantic-ui-react';

class Dashboard extends Component {
    renderContent(){
        switch (this.props.auth){
          case null:
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted content='Loading' />
                    </Dimmer>

                    <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>
            );
          case false:
            return (
                <Message
                icon='inbox'
                header='You must be logged in to wiew profile info'
                content='Please log in in the top right section'
              />
            );
          default:
            return (
              <h2>demo</h2>
            );
        }
      }
}

function mapStateToProps({ auth }){
   return { auth };
}


export default connect(mapStateToProps)(Dashboard);