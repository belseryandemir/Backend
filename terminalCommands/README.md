# terminal commands

## ls related commands
ls -itself shws all files and directories

ls -l shows a bit more detailed information like who have created it who is hte owner and it's accessibility

ls -a shows hidden files in the current directory

ls -la shows much more detailed information like creation history owner and it also shows hidden files

## cat rel commands

cat filename.txt - shows the content of a file

cat >> filename.txt - appends some text or anything to the file that stands after ">>" 

cat > filename.txt - erases the content of a file and then inserts to it some text or something else

## cd and directory rel commands

cd directoryname - changes directory to the sown 

cd .. or cd ../.. - this command is used for getting back froma folder

pwd - displays current directory that we are in

mkdir - for creation of new directory

rmdir - remove existing directory if it is empty

mv after which we need to show the absolute path of destination - is used for moving directory from one location to another

mv - it can also be used for renaming like mv prevdirname newdirname

cp - for copying 
## file rel commands

cp filename.txt destinationFolder

touch - creating a file 

rm - for removing a file

cat > filename.txt - inserting to a file

echo > filename.txt some text here - this can also echo some content to a file

## memory control related commands

top - this command is really useful once if some program isn't answering or got stuck smwhere in the middle of CPU it displays the id of the running program by which this proccess can be killed by fierce

kill 123344 - this is the continuation of above command by this we can refer to a particular proccess and stop it if it is causing some trouble

ps -aux - worse version of above command top

## downloading and installing related commands

wget https//.linkhere.com - by executing this command we acn easyly download some app or some packages or whatever that can be downloaded and has a link that refers to it

apt-get install - the command that lets us install most of OS related programms 

apt update - updating the software in our machine
apt upgrade - continuation of above

# history rel command

grep -i searchig word bigfilename.txt - better searching inside of a big file

history - for showing the history of exexuted cmmands we acn also execute it like this history 3000 for displaying the last 300 commands in terminal

history -c - clearing the history of commands