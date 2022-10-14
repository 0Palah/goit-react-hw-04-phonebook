import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className={css.sectionWrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
