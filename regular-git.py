import os
import time

sleep_time = 60 * 10





def git_all(comment):
    print("This is the git comment: ", comment)
    cmd_add = "git add ."
    cmd_commit = f"git commit -m \"{comment}\""
    print("This is the git cmd", cmd_commit)
    cmd_push = "git push -u origin main"

    os.system(cmd_add)
    os.system(cmd_commit)
    os.system(cmd_push)

def write_log(text):
    with open("./regular-git-log", "r") as log_file:
        n = log_file.readline().strip('\n')
        n = int(n)
        log_file.close()

    with open("./regular-git-log", "a+") as log_file:
        content = "\n"+text+str(n)
        print("this is content", content)
        log_file.write(content)
        log_file.close()

    with open("./regular-git-log", "r+") as log_file:
        n = n + 1
        print(n)
        log_file.write(str(n)+"\n")
        log_file.close()
    print(content)
    return content

def git_deamon(sleep_time):

    while True:

        comment = write_log("regular commit")
        comment = comment.strip("\n")
        git_all(comment)
        time.sleep(sleep_time)

def git_n(m):

    for i in range(m):
        comment = write_log("regular commit")
        comment = comment.strip("\n")
        git_all(comment)

def git_one():
    comment = write_log("regular commit")
    comment = comment.strip("\n")
    git_all(comment)

git_deamon(sleep_time)