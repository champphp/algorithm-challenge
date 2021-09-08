from User import User
#Inheritance User
class Customer(User): 
  """
  __init__ It is called as a constructor in object oriented. 
    This method is called when an object is created from a class and 
    it allows the class to initialize the attributes of the class.
  'self' is used to represent the instance of a class. 
  """
  def __init__(self, name, membership_type):
    self.name = name
    self.membership_type = membership_type
  
  @property #Getter Encapsulation
  def name(self):
    return self._name #_name private

  @name.setter #Setter Encapsulation
  def name(self, name):
    self._name = name
  
  @name.deleter #Deleter Encapsulation
  def name(self):
    del self._name
  
  def update_membership(self, new_membership_type):
    self.membership_type = new_membership_type
  
  """
    The __str__ method should be defined in a way that is easy 
      to read and outputs all the members of the class. 
    The __str__ method is called when the following functions are invoked 
      on the object and return a string
  """
  def __str__(self):
    return self.name + " " + self.membership_type

  def print_all_customers(customers):
    for customer in customers:
      print(customer)
  """
  __eq__ method to compare two objects by their values.
  """
  def __eq__(self, other):
    if self.name == other.name and self.membership_type == other.membership_type:
      return True

    return False

  #The hash() method returns the hash value of an object if it has one. 
  __hash__ = None
  #__repr__ is a special method used to represent a class's objects as a string.
  __repr__ = __str__

class Teacher(User):
  def log(self):
    print("I'm a teacher")


customers = [
  Customer("champ", "Gold"),
  Customer("jam", "Bronze"),
  Teacher()
]
# customers[1].update_membership("Gold")

#print(customers[1]) #__str__

# Customer.print_all_customers(customers)

# print(customers[0] == customers[1]) #__eq__

# print(customers) #__repr__

customers[0].log() #Inheritance

for customer in customers:
  customer.log()



