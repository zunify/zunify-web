import React, { Component } from 'react';

type Props = {
    selected: number,
    options: any[]
}

class Home extends Component<Props> {
    render() {
        return (
            <div style={{marginTop: '1rem', lineHeight: "0.5rem"}} className='menu'>
                {this.props.options.map(el => {
                    return (
                        <p key={el.id} style={{fontSize: '2rem'}}>{el.id == this.props.selected ? <b>{el.label}</b>: el.label}</p>
                    )
                })}
            </div>
        );
    }
}

export default Home;
