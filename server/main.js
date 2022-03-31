import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import {employeeCollection} from '/imports/api/employee';

function insertLink({ Sr_no, name, position }) {
  employeeCollection.insert({Sr_no, name,position});
}


function employee({id,name, position}) {
  LinksCollection.insert({id,name, position, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (employeeCollection.find().count() === 0) {
    insertLink({
 Sr_no:'1',
 name:'Alok',
 position:'fullstack'
    });

    insertLink({
      Sr_no:'2',
      name:'Sumeet',
      position:'Android'
    });

   
    
  }
});
