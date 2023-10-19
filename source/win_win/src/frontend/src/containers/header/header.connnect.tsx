import * as React from 'react';
import { AssignmentInd } from '@mui/icons-material';

const HeaderConnectComponent = () => {
    return (
        <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
            <div className="nav-item btn-group me-2 me-lg-0">
                <a href="#!" className="btn btn-sm btn-primary py-1 px-3"><AssignmentInd className={"bx me-1"}/>Connect</a>
            </div>
            <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse"
                    data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                      <i></i>
                    </span>
            </button>
        </div>
    )
}

export default HeaderConnectComponent;