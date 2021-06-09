import React from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default function Sidebar() {
    return (
        <div>
            <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
         Şehir
          <Menu.Menu>
            <Menu.Item
              name='city'
              
            >
              İstanbul
            </Menu.Item>
            <Menu.Item
              name='city'
             
            >
              Ankara
            </Menu.Item>
            <Menu.Item
              name='city'
            
            >
              Antalya
            </Menu.Item>
            <Menu.Item
              name='city'
              
            >
              İzmir
            </Menu.Item>
            <Menu.Item
              name='city'
              
            >
              Bursa
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
         Jobs
          <Menu.Menu>
            <Menu.Item
              name='job'
              
            >
              Software Engineering
            </Menu.Item>
            <Menu.Item
              name='job'
             
            >
              Nutrition
            </Menu.Item>
            <Menu.Item
              name='job'
            
            >
              Lawyer
            </Menu.Item>
            <Menu.Item
              name='job'
              
            >
              Intern
            </Menu.Item>
            <Menu.Item
              name='job'
              
            >
              Influencer
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>


        <Menu.Item
          name='browse'
         
        >
          <Icon name='grid layout' />
          Ara
        </Menu.Item>
       
      </Menu>
       
        </div>
    )
}
