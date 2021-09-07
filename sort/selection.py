import sys
import os

PACKAGE_PARENT = '..'
SCRIPT_DIR = os.path.dirname(os.path.realpath(os.path.join(os.getcwd(), os.path.expanduser(__file__))))
sys.path.append(os.path.normpath(os.path.join(SCRIPT_DIR, PACKAGE_PARENT)))

from fun.load import load_numbers

numbers = load_numbers(sys.argv[1])

#selection value min or max
def selection_sort(lists):
  sorted_list = []
  # print("%-25s %-25s" % (lists, sorted_list))
  for i in range(0, len(lists)):

    index_to_move = index_to_min(lists)
    sorted_list.append(lists.pop(index_to_move))
    # print("%-25s %-25s" % (lists, sorted_list))

  return sorted_list

def index_to_min(lists):
  index_min = 0
  for i in range(1, len(lists)):
    if lists[index_min] > lists[i]:
      index_min = i

  return index_min

number_list_sort = selection_sort(numbers)
print("result = ", number_list_sort)
print(len(number_list_sort))

