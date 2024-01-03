import webbrowser
import os

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'



welcome = '''

     ,/^\\'-~-`/^\\,
    {(3)       (E)}
  ,(- __\\     /__ -),
,{    =*.;   ;.*=    },              __                                      .___           
{   /   \\  |  /   \\   ),            |  | ____ ______________  ___.__.      __| _/_______  __
` /      / | \\      \\  }               |  |/ |  |  \_  __ \__  \<   |  |     / __ _/ __ \  \/ /
` /  -~~(.,Y,.)~~-  \\  }            |    <|  |  /|  | \// __ \\___ |    / /_/ \  ___/\   / 
{  /     (^"^)     \\  }'            |__|_ |____/ |__|  (____  / ____| /\ \____ |\___  >\_/  
`{,  /     ~     \\  ,}'                  \/                 \/\/      \/      \/    \/      
 \`{\\_/         \\_/}'/
  >_ _`\\,,/|\\,,/'_ _<
 `(}(}(} `~-~' {){){)'
'''

def lion_portfolio():
    os.system('cls')
    lion_menu()
         

def lion_menu():
    while True:
      os.system('cls')
      print(bcolors.OKGREEN)
      print(welcome)
      print(bcolors.HEADER)
      print("Welcome to Kuray Karaaslan's Portfolio!")
      print("Here you can find all my projects and contact information.")
      print("Please select from the following options:")
      print("1. Projects")
      print("2. Contact Information")
      print("3. About Me")
      print("3. Exit")

      print("------------------------------------")
      print(bcolors.ENDC)
      option = input("Enter your option: ")
      if option == "1":
         projects()
      elif option == "2":
         contact_menu()
      elif option == "3":
          about_menu()
      elif option == "x" or option == "X":
          break
    
def projects():
   print("1. Python Projects")

def contact_menu():
  while True:
    os.system('cls')
    print(bcolors.OKCYAN, end="")
    print("Contact Information:")
    print(bcolors.ENDC, end="")
    print("------------------------------------")
    print("1. GitHub: ", end = "")
    print("https://github.com/kuraykaraaslan")
    print("2. LinkedIn: ", end = "")
    print("https://www.linkedin.com/in/kuraykaraaslan/")
    print("3. Email: ", end = "")
    print("kuray@kuray.dev")
    print("4. Phone ", end = "")
    print("+90 551 681 53 65")
    print("5. Back")
    print("x. Exit")
    print("")
    print("------------------------------------")

    print("Please select from the following options:")

    option = input("Enter your option: ")
    if option == "1":
      webbrowser.open("https://github.com/kuraykaraaslan")
    elif option == "2":
      webbrowser.open("https://www.linkedin.com/in/kuraykaraaslan/")
    elif option == "3":
      webbrowser.open("mailto:kuray@kuray.dev")
    elif option == "4":
      webbrowser.open("tel:+905516815365")
    elif option == "5":
      break
    elif option == "x":
      goodbye()
      break


def about_menu():
  os.system('cls')
  about_me()
  while True:
    print("1. Education")
    print("2. Experience")
    print("3. Skills")
    print("4. Back")
    print("5. Exit")
    print("")
    print("------------------------------------")

    print("Please select from the following options:")

    option = input("Enter your option: ")
    if option == "1":
      education()
    elif option == "2":
      experience()
    elif option == "3":
      skills()
    elif option == "4":
      break
    elif option == "5":
      goodbye()

def about_me():
  os.system('cls')
  print(bcolors.OKCYAN)
  print("Hello, I am ", end="")
  print(bcolors.BOLD, end="")
  print("Kuray Karaaslan! ",end="")
  print(bcolors.ENDC, end="")
  print("from ", end="")
  print(bcolors.BOLD, end="")
  print("Istanbul, Turkey.", end="")
  print(bcolors.ENDC)
  print("")
  print("I am a ", end="")
  print(bcolors.BOLD, end="")
  print("software developer ", end="")
  print(bcolors.ENDC, end="")
  print("with a demonstrated history of working in the computer software industry.", end="")
  print("Skilled in ",end="")
  print(bcolors.BOLD, end="")
  print(bcolors.OKCYAN, end="")
  print("Python, Php, C#, and SQL. ",end="")
  print(bcolors.ENDC, end=" ")
  print("Strong engineering professional with a Bachelor of Engineering from Dokuz Eylul University.")
  print("")
  print("I had experience in ",end="")
  print(bcolors.BOLD, end="")
  print("developing web applications, desktop applications, and mobile applications for ",end="")
  print(bcolors.OKCYAN, end="")
  print("3 years.")
  print(bcolors.ENDC)
  print("I am also a student at the University of Istanbul, studying Computer Programming.")
  print("I am passionate about learning new technologies and developing software and interested in",end="")
  print(bcolors.BOLD, end="")
  print("Machine Learning and Artificial Intelligence.")
  print("I am a big fan of open-source software and I am always looking for new projects to contribute to.")
  print("")
  print(bcolors.OKGREEN, end="")
  print("I am currently looking for a job as a software developer", end=" ")
  print(bcolors.ENDC, end="")
  print(bcolors.OKGREEN, end=" ")

def education():
  while True:
    os.system('cls')
    print(bcolors.OKCYAN)
    print("Education")
    print(bcolors.ENDC, end="")
    print(bcolors.OKGREEN)
    print("Dokuz Eylul University")
    print(bcolors.ENDC, end="")
    print("Bachelor of Engineering - BE, Civil Engineering")
    print("2015 - 2020")
    print(bcolors.ENDC, end="")
    print(bcolors.OKGREEN)
    print("Istanbul University")
    print(bcolors.ENDC, end="")
    print("Bachelor of Engineering - BE, Management Information Systems")
    print("2021 - Present")
    print(bcolors.ENDC)
    print("1. Back")
    print("2. Exit")
    print("")
    print("------------------------------------")
    option = input("Enter your option: ")
    if option == "1":
      break
    elif option == "2":
      goodbye()
      break
    
def experience():
  while True:
    os.system('cls')
    print(bcolors.OKCYAN)
    print("Experience")
    print(bcolors.ENDC, end="")
    print(bcolors.OKGREEN)
    print("Software Developer")
    print(bcolors.ENDC, end="")
    print("planmerge.com")
    print("Aug 2022 - Present")
    print(bcolors.OKGREEN)
    print("Software Developer Intern")
    print(bcolors.ENDC, end="")
    print("POS Software")
    print("Aug 2021 - Jan 2022")
    print(bcolors.OKGREEN)
    print("BIM Developer", end="")
    print(bcolors.ENDC, "")
    print("Autodesk Gold Partner")
    print("Feb 2021 - Aug 2021")
    print(bcolors.ENDC)
    print("1. Back")
    print("2. Exit")
    print("")
    print("------------------------------------")
    option = input("Enter your option: ")
    if option == "1":
      break
    elif option == "2":
      goodbye()
      break


def skills():
  ## skills with levels
  ## █ total 20
  print(bcolors.OKCYAN)
  print("Skills")
  print(bcolors.ENDC)
  print("React   ", end="") # 15
  print(bcolors.OKGREEN, end="") # 15
  print("███████████████", end="") # 15
  print(bcolors.ENDC, end="")
  print("█████")
  print("")
  print("Python  ", end="") # 15
  print(bcolors.OKGREEN, end="")
  print("███████████████", end="")
  print(bcolors.ENDC, end="")
  print("█████")
  print("")
  print("Php     ", end="") # 15
  print(bcolors.OKGREEN, end="")
  print("██████████████", end="")
  print(bcolors.ENDC, end="")
  print("█████")
  print("")
  print("C#      ", end="") # 10
  print(bcolors.OKGREEN, end="")
  print("█████████", end="")
  print(bcolors.ENDC, end="")
  print("███████████████")
  print("")
  print("SQL     ", end="") # 10
  print(bcolors.OKGREEN, end="")
  print("█████████", end="")
  print(bcolors.ENDC, end="")
  print("███████████████")
  print("")
  print("HTML    ", end="") # 20
  print(bcolors.OKGREEN, end="")
  print("████████████████████████")
  print(bcolors.ENDC, end="")
  print("")
  print("CSS     ", end="") # 20
  print(bcolors.OKGREEN, end="")
  print("████████████████████████")
  print(bcolors.ENDC, end="")
  print("")
  print("JS      ", end="") # 15
  print(bcolors.OKGREEN, end="")
  print("███████████████", end="")
  print(bcolors.ENDC, end="")
  print("█████")
  
def goodbye():
  print("Goodbye!")
  exit()

lion_portfolio()