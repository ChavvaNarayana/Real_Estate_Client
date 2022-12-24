import React from 'react'
import List from './List'

function Properties({ data, ppdId }) {

    return (
        <div className='property-table mx-5'>
            <table className='mx-5' style={ { width: '100%' } }>
                <thead className=''>
                    <tr className='flex flex-row space-between mx-10'>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>DaysLeft</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='scrollable' style={ { overflowY: "scroll", height: '400px', display: 'block' } }>
                    { data.filter((prop) => prop.ppdId.includes(ppdId)).map((property, i) => (
                        <List
                            key={ property.ppdId + i }
                            ppdId={ property.ppdId }
                            property={ property.propertyType }
                            contact={ property.mobile }
                            area={ property.area }
                            views={ property.views }
                            status={ property.status }
                            daysLeft={ property.daysLeft }

                        />
                    )) }
                </tbody>


            </table>
        </div>
    )
}

export default Properties