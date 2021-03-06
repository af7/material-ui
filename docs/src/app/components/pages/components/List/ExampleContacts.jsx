import React from 'react';
import MobileTearSheet from '../../../MobileTearSheet';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import Divider from 'material-ui/lib/divider';
import Avatar from 'material-ui/lib/avatar';
import Colors from 'material-ui/lib/styles/colors';

const ListExampleContacts = () => (
  <MobileTearSheet>
    <List>
      <ListItem
        primaryText="Chelsea Otakan"
        leftIcon={<ActionGrade color={Colors.pinkA200} />}
        rightAvatar={<Avatar src="images/chexee-128.jpg" />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kolage-128.jpg" />}
      />
      <ListItem
        primaryText="James Anderson"
        insetChildren={true}
        rightAvatar={<Avatar src="images/jsa-128.jpg" />}
      />
      <ListItem
        primaryText="Kerem Suer"
        insetChildren={true}
        rightAvatar={<Avatar src="images/kerem-128.jpg" />}
      />
    </List>
    <Divider inset={true} />
    <List>
      <ListItem
        primaryText="Adelle Charles"
        leftAvatar={
          <Avatar
            color={Colors.pinkA200} backgroundColor={Colors.transparent}
            style={{left: 8}}
          >
            A
          </Avatar>
        }
        rightAvatar={<Avatar src="images/adellecharles-128.jpg" />}
      />
      <ListItem
        primaryText="Adham Dannaway"
        insetChildren={true}
        rightAvatar={<Avatar src="images/adhamdannaway-128.jpg" />}
      />
      <ListItem
        primaryText="Allison Grayce"
        insetChildren={true}
        rightAvatar={<Avatar src="images/allisongrayce-128.jpg" />}
      />
      <ListItem
        primaryText="Angel Ceballos"
        insetChildren={true}
        rightAvatar={<Avatar src="images/angelceballos-128.jpg" />}
      />
    </List>
  </MobileTearSheet>
);

export default ListExampleContacts;
