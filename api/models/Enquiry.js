/* eslint-disable func-names */
const keystone = require('keystone');
const expertise = require('../../expertise');

const { Types } = keystone.Field;

/**
 * Enquiry Model
 * ==========
 */
const Enquiry = new keystone.List('Enquiry', {
  track: { createdAt: true },
  nocreate: true,
  noedit: true,
});

Enquiry.add({
  name: {
    type: Types.Text, index: true, required: true, initial: true,
  },
  phone: {
    type: Types.Text, index: true, required: true, initial: true,
  },
  email: {
    type: Types.Email, initial: true, required: true, index: true,
  },
}, 'Interests', {
  ...expertise.map(item => ({
    [item.key]: {
      type: Types.Boolean,
      required: true,
      initial: true,
      default: false,
      index: true,
      label: item.title,
    },
  })).reduce((a, b) => Object.assign(a, b), {}),
});

/**
 * Registration
 */
Enquiry.defaultColumns = 'name, phone, email';
Enquiry.register();
