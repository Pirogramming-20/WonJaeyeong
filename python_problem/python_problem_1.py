import random

def brGame(num, player):
    if player == "computer":
        num_input = random.randint(1, 3)
    else:
        while True:
            try:
                num_input = int(input(f'부를 숫자의 개수를 입력하세요(1, 2, 3만 입력 가능) : '))
                if num_input in [1, 2, 3]:
                    break
                else:
                    print('1, 2, 3 중 하나를 입력하세요')
            except ValueError:
                print('정수를 입력하세요')

    for i in range(num + 1, num + num_input + 1):
        if i > 31:
            return 31
        print(f'{player} {i}')

    return num + num_input

num = 0
while num < 31:  
  num = brGame(num, 'computer')
  if num >= 31:
      print('player wins!')
      break
  
  num = brGame(num, 'player')
  if num >= 31:
    print('computer wins!')
    break