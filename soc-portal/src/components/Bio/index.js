

function Bio ({pInfo}){

return (
<div className="bio-column">
    <div id = 'pInfo'>
        <img src={pInfo.image} alt = 'Profile Image' id = 'profImage' />
        <div id = 'cardDetail'>
        <label id = 'name'><h3>{pInfo.firstName} {pInfo.surname}</h3></label>
        <label id = 'email'><h3>{pInfo.email}</h3></label>
        <label id = 'applicant'>Application ID:</label>
        <label id = 'applicantId'><h3>{pInfo.appId}</h3></label>
        </div>
    </div>
    <div className = 'topClip'>
        <div className = 'hole'></div>
    </div>
    <div class="clipboard">
      <div class="clip"></div>
      <div class="paper">
        <h2>Welcome to your SoC portal</h2>
        <p>Your very own Dashboard to manage and track progress on all the tasks and activities for the bootcamp 15 application 
After you complete each task remember to check off along the way and celebrate those small wins</p>
        <h3>Welcome Pack</h3>
        <p>this contains text from the welcome pack!</p>
      </div>
    </div>
</div>
)
}








export default Bio;