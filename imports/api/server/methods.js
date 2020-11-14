import { LinksCollection } from '../links';


Meteor.methods({
  update({ _id }) {
    LinksCollection.update({ _id }, { $set: { date: new Date() } });
  },
  unset({ _id }) {
    LinksCollection.update({ _id }, { $unset: { date: true } });
  }
})
