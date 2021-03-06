import React from 'react';
import PropTypes from 'prop-types';

class DataModelRow extends React.Component {
  render() {
    return (
      <tr>
        <td><pre>{this.props.field.name}</pre></td>
        <td><pre>{this.props.field.value}</pre></td>
        <td dangerouslySetInnerHTML={{__html: this.props.field.description}} />
        <td dangerouslySetInnerHTML={{__html: this.props.field.notes}} />
      </tr>
    );
  }
}

const DataModelFieldPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  notes: PropTypes.string
}).isRequired;

DataModelRow.propTypes = DataModelFieldPropType.isRequired;

class DataModelTable extends React.Component {
  render() {
    const rows = [];
    this.props.fields.forEach(function(field) {
      rows.push(<DataModelRow field={field} key={field.name} />);
    });
    return (
      <table className='ds-c-table ds-c-table--borderless ds-u-font-size--small'>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Value</th>
            <th>Description</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

DataModelTable.propTypes = {
  fields: PropTypes.arrayOf(DataModelFieldPropType).isRequired
};

export default DataModelTable;
