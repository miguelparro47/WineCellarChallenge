import React, { Component } from 'react';
import { FormErrors } from './FormErrors';

class AddWine extends Component {
  constructor (props) {
    super(props);
    this.state = {
        name: "",
        vineyard: "", 
        year: "",
        type: "",
      formErrors: {name: '', vineyard: '', year:'', type:''},
      nameValid: false,
      vineyardValid: false,
      yearValid: false, 
      typeValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let vineyardValid = this.state.vineyardValid;
    let yearValid = this.state.yearValid;
    let typeValid = this.state.typeValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^([^0-9]*)$/);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'vineyard':
        vineyardValid = value.match(/^([^0-9]*)$/);
        fieldValidationErrors.vineyard = vineyardValid ? '': ' is invalid';
        break;

      case 'year':
        yearValid = value.match(/(19[78][0-9]|199[0-9]|200[0-9]|201[0-9])/);
        fieldValidationErrors.year = yearValid ? '': ' is not a year';
        break;

      case 'type':
        typeValid = value==='red' || value==='white' || value==='rose' || value==='sparkling' ? true : false ;
        fieldValidationErrors.type = typeValid ? '': ' is invalid';
        
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    vineyardValid: vineyardValid,
                    yearValid: yearValid,
                    typeValid: typeValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid && this.state.vineyardValid && this.state.yearValid && this.state.typeValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addWine(this.state);
  }

  render () {
    return (
      <form className="demoForm" onSubmit={this.handleSubmit}>
        <h2>Add your new wine here</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name</label>
          <input type="name" required className="form-control" name="name"
            placeholder="world's famous"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.vineyard)}`}>
          <label htmlFor="vineyard">Vineyard</label>
          <input type="vineyard" className="form-control" name="vineyard"
            placeholder="that vineyard"
            value={this.state.vineyard}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.year)}`}>
          <label htmlFor="year">Year</label>
          <input type="year" required className="form-control" name="year"
            placeholder="ex: 1980"
            value={this.state.year}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.type)}`}>
          <label htmlFor="type">Type</label>
          <input type="type" className="form-control" name="type"
            placeholder="red"
            value={this.state.type}
            onChange={this.handleUserInput}  />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default AddWine;