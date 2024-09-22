var cp = " Gems";
var codcp = ['100,000','200,000','300,000','400,000','500,000','600,000','700,000','800,000','900,000','999,999'];	
var names = ['1upCoop', 'Acquetwa4', 'AimWaka', 'Anemont2', 'Arcaloci18', 'Aurallyfun', 'Badgenema2', 'BeautySkill99', 'Cartridgeop', 'rgynaCaste', 'Cha2rpavi', 'Classoranta33', 'Combat122', 'Datatah', 'Datatech34', 'Emulatorch65', 'Emulatorte74', 'FiDungeon67', 'HStreaming93', 'Hopetailzz', 'Hylysackxx', 'xJoysIndiex', 'Leaguermof55', 'LeeWizardz3z', 'Lemnison42', 'Leucomm12', 'Lexondi66', 'LunaticDj4c', 'Lutingar2x' ,'Tournat199', 'TzTours', 'T2rinial', 'Unitara54'];	
function create() {
VanillaToasts.create({
  title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
  text: document.body.valueToUse = codcp[Math.floor(Math.random() * codcp.length)] + cp,
  type: 'success',
  icon: 'img/profile.png',
  timeout: 2500,
});
setTimeout(create, 3000)
}
