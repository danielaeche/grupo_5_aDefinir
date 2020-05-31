import React, { Component } from 'react';



class Card extends Component {
    state = { data: {}}

      componentDidMount (){
        fetch('http://localhost:3001/api/productos')
        .then(res => res.json())
        .then(result => {
            const {data} = result
            this.setState({ data })
        })
    }
    
    _renderCantidadProductos(props) {
        const { data } = this.state
        return <div className="col-md-4 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                {props.title}
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                {data.total}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={id}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    }
    amountProductos(){
        const {data} = this.state
        let total = 0;
        for(let i = 0; i < data.length; i++){
            total = total + data[i].precioUnitario
            }
        return total;
    }
    _renderAmountProductos(props){
        return <div className="col-md-4 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                {props.title}
                                            </div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                {total}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <i className={id}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    }
   render(){
        return (
            <div>
                {this._renderCantidadProductos()}
                {this._renderAmountProductos()}
            </div>
        )
    }
}

export default Card;
