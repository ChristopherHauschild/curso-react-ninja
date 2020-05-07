import React, { Component } from 'react'

class Plugin extends Component {
    constructor() {
        super()
        // this do handleClick permanece referenciando a classe e não o evento 
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log('Clicou Botão', this.myInput)
        this.myInput.focus()
    }

    render() {
        return (
            <div>
                <input type='text' ref={(node) => (this.myInput = node)} />
                <button onClick={this.handleClick}> Focus </button>
            </div>
        )
    }
}

export default Plugin