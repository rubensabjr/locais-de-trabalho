import React, { Component } from 'react'
import axios from 'axios'
import Main from '../templates/Main'

const baseUrl = 'http://localhost:3001/workPlaces'
const initialState = {
    workPlaces: { predio: '', local: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ workPlaces: initialState.workPlaces })
    }

    save() {
        const workPlaces = this.state.workPlaces
        const method = workPlaces.id ? 'put' : 'post'
        const url = workPlaces.id ? `${baseUrl}/${workPlaces.id}` : baseUrl
        axios[method](url, workPlaces)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ workPlaces: initialState.workPlaces, list })
            })
    }

    getUpdatedList(workPlaces, add = true) {
        const list = this.state.list.filter(w => w.id !== workPlaces.id)
        if(add) list.unshift(workPlaces)
        return list
    }

    updateField(event) {
        const workPlaces = { ...this.state.workPlaces }
        workPlaces[event.target.name] = event.target.value
        this.setState({ workPlaces })
    }

    renderForm(){
        return(
            <div className="form">
                <div className= "row">
                    <div class="form-group col-12 col-md-6">
                        <label for="inputBuilding">Prédio</label>
                        <select id="inputBuilding" class="form-control" 
                        name="predio" value={this.state.workPlaces.name} onChange={e=>this.updateField(e)}>
                         <option selected>Prédio 1</option>
                         <option selected>Prédio 2</option>
                         <option selected>Prédio 3</option>
                         <option selected>Prédio 4</option>
                         <option selected>Prédio 5</option>
                        </select>
                    </div>
                    <div class="form-group col-12 col-md-6">
                        <label for="inputWorkPlaces">Local de Trabalho</label>
                        <input type="text" class="form-control" id="inputWorkPlaces" name="local" 
                        value={this.state.workPlaces.local} onChange={e=>this.updateField(e)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    render(){
        return(
            <Main>
                {this.renderForm()}
            </Main>
        )
    }
}