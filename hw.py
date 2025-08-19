import time

#Define 2d coordinates for the points
points = {
    "P1": (100, 200),
    "P2": (200, 250),
    "P5": (200, 200),  # Center point
    "P3": (300, 200),
    "P4": (200, 150),
}

#Let's Define the movement path using python list
path = ["P1", "P2", "P5", "P3", "P4", "P1"]

def apply_glue_at(point_name):
    coords = points[point_name]
    print(f"Moving to {point_name} at position {coords}")
    print("Applying extra glue...")
    time.sleep(0.5)

def move_robot():
    print("Turning ON glue applicator (Signal 1 ON)\n")
    for point in path:
        apply_glue_at(point)
        print("-----------")
    print("\nTurning OFF glue applicator (Signal 1 OFF)")

    print("Robot has completed the path.")
if __name__ == "__main__":
    move_robot()
