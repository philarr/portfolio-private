import React from 'react';
import { Link } from 'react-router'

class ProjectNext extends React.Component {

    render() {
        const { uid, color, desc } = this.props.next ? this.props.next : { uid: '/profile', color: ['#232323'], desc: 'Want to know more about me?' };

        return (
            <div className="project-next">
                <Link to={ this.props.next ? ('/case/' + uid) : uid } className="project-next-wrapper">
                    <div className="next-background" ref="nextBg" style={ { backgroundColor: color[0] } } />
                    <div className="inner">
                        <div className="left">
                        </div>
                        <div className="right">
                            { this.props.next ? <p className="sublabel">Up next</p> : <p className="sublabel">That's it!</p> }
                            <h2 className="label">
                            { desc }
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}



ProjectNext.displayName = "ProjectNext";
export default ProjectNext;
