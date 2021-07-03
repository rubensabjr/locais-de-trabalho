import './WorkPlacesCrud.css'
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
        if(this.emptyFields(workPlaces))
            alert("Campos Obrigatórios")
        else{
            const method = workPlaces.id ? 'put' : 'post'
            const url = workPlaces.id ? `${baseUrl}/${workPlaces.id}` : baseUrl
            axios[method](url, workPlaces)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ workPlaces: initialState.workPlaces, list })
                })
        }
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

    load(workPlaces) {
        this.setState({ workPlaces })
    }

    remove(workPlaces) {
        axios.delete(`${baseUrl}/${workPlaces.id}`).then(resp => {
            const list = this.getUpdatedList(workPlaces, false)
            this.setState({ list })
        })
    }

    emptyFields(workPlaces){
        if(workPlaces.predio == '' || workPlaces.local == '')
            return true
        
        return false
    }

    renderForm(){
        return(
            <div className="form">
                <div className= "row">
                    <div class="form-group col-5">
                        <label for="inputBuilding">Prédio</label>
                        <select type="text" id="inputBuilding" class="form-control" name="predio" 
                            value={this.state.workPlaces.predio} 
                            onChange={e=>this.updateField(e)}>
                                <option selected></option>
                                <option>Prédio 1</option>
                                <option>Prédio 2</option>
                                <option>Prédio 3</option>
                                <option>Prédio 4</option>
                                <option>Prédio 5</option>
                        </select>
                    </div>
                    <div class="form-group col-5">
                        <label for="inputWorkPlaces">Local de Trabalho</label>
                        <input type="text" id="inputWorkPlaces" class="form-control" name="local"
                        maxLength="50"
                        value={this.state.workPlaces.local} onChange={e=>this.updateField(e)}/>
                    </div>
                    <div class="form-group col 2">
                        <button className="btn btn-primary btn-sm m-1"
                            onClick= {e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-danger btn-sm m-1"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Prédio</th>
                        <th>Local de Trabalho</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(workPlaces => {
            return (
                <tr key={workPlaces.id}>
                    <td>{workPlaces.predio}</td>
                    <td>{workPlaces.local}</td>
                    <td>
                        <button className="btn btn-secondary m-1"
                            onClick={() => this.load(workPlaces)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-secondary m-1"
                            onClick={() => this.remove(workPlaces)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    render(){
        return(
            <Main>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}