import React from "react";

class InvoiceHeader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="invoice-header">
                <h2>Invoice Feed</h2>
                <form>
                    <input className="search-bar" placeholder="Find a project..." type="text" />
                </form>
            </div>
        )
    }
}


export default InvoiceHeader