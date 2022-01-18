import React from 'react';

const  HeaderComponent = () => {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
                        <div className={"navbar-brand"}>Employees Managment System - TailorSoft</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;