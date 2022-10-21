import { Field } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return <Field type="text" value={value} name="filter" onChange={onChange} />;
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
