import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    const handler = Meteor.subscribe('links');

    if (!handler.ready()) {
      return { isLoading: true };
    }

    return LinksCollection.find().fetch();
  });

  const update = (_id) => {
    Meteor.call('update', { _id });
  };

  const unset = (_id) => {
    Meteor.call('unset', { _id });
  };

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links?.map?.(
        link => (
          <li key={link._id}>
            <a href={link.url} target="_blank">
              {link.title} - {link.date?.toString()}
            </a>

            <button onClick={ () => update(link._id) }>
              Update
            </button>

            <button onClick={ () => unset(link._id) }>
              Unset
            </button>
          </li>
        )
      )}</ul>
    </div>
  );
};
