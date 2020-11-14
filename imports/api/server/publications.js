import { LinksCollection } from '../links';



Meteor.publish('links', function publishLinks() {
  return LinksCollection.find({});
});
