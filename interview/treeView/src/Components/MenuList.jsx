import React from 'react'

import menus from './data'
import MenuItem from './MenuItem'

function MenuList() {
    return (
        <div>
            <ul>


                {console.log(menus)}
                {
                    menus && menus.length > 0
                        ?
                        menus.map((item,idx) => {
                            if (item.child > 0) {
                                return <MenuItem item={item.child[0].child} />
                            } else {
                                return <MenuItem item={item.child[0].child[0]} />

                                // return <li>{item.lable}</li>
                            }
                        })
                                : null
                }

                            </ul>

        </div>
    )
}

export default MenuList