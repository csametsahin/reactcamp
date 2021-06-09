import React from 'react'
import {  Dropdown } from 'semantic-ui-react'


export default function Profile() {
    return (
        <div>
              <Dropdown item text='Profil'>
            <Dropdown.Menu>
              <Dropdown.Item>Profil Detayları</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    )
}
