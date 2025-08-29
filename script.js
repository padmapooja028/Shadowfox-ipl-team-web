  
    function submitPoll(){
      const choices = document.getElementsByName('poll');
      let selected = null;
      for(const c of choices){ if(c.checked) selected = c.value; }
      const result = document.getElementById('pollResult');
      if(!selected){ result.textContent = 'Please choose a player to vote.'; return; }
      result.textContent = `Thanks! Your vote for ${selected} has been recorded .`;
    }

    function submitFanForm(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert(`Thanks, ${name}! We'll contact you at ${email}.`);
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('msg').value = '';
    }
  
