// When the user clicks on button, open the prompt window

function birdFunction() {
    let weapon;
    let say = prompt('\'Squaaaaaaaak!!\' you hear one of the birds shout. What would you like to say in return?');
      if(say){
        let say = prompt('The eldest bird raises his head from his ale...\'What\'s that, young egg-child? Would you care to \
accompany myself and company on a quest to the shadow realm?\' (Y/N)');
          if(say==='Y'){
            say = prompt('\'Excellent. We will ride at dawn. For now, choose from these two trustworthy arms.\' \
With that, the aged falcon reveals two shining weapons for you to choose between: a jewel-encrusted \
spear etched with holy symbols (\'spear\'), and a hefty axe that looks to weigh nearly 150kg (\'axe\')')
              if(say==='spear'){weapon = 'spear', alert('You have equipped the spear')}
              else if(say==='axe'){weapon = 'axe', alert('You have equipped the axe')}
          }else {
            alert('\'Farewell, then.\'')
          }

          
      }
      console.log(weapon)
    }
  
