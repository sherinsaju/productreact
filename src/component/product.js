import React from 'react'

const product = () => {
  return (
    <div>
        
        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <label for="" className="form-label">product Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <label for="" className="form-label">price</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <label for="" className="form-label">description</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
  )
}

export default product