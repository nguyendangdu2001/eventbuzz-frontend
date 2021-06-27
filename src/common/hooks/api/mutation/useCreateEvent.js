import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export const CREATE_EVENT = gql`
  mutation CreateEvent($event: CreateEventInput!) {
    createEvent(createEventInput: $event) {
      createdAt
      desc
      endDate
      freeSlot
      host {
        avatar
        firstName
        lastName
        id
      }
      id
      location
      locationName
      img
      price
      startDate
      slot
    }
  }
`;

const useCreateEvent = (props) => {
  return useMutation(CREATE_EVENT, {
    ...props,
    onCompleted: (data) => {
      toast.success(
        "Create event successfully, now you need to wait for admin's authourization",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      props?.onCompleted?.(data);
    },
    update(cache, { data: { createEvent } }) {
      cache.modify({
        fields: {
          myEvent(existingEvents) {
            console.log(existingEvents);
            if (!existingEvents) return;

            const newEventRef = cache.writeFragment({
              data: createEvent,
              fragment: gql`
                fragment NewEvent on Event {
                  createdAt
                  desc
                  endDate
                  freeSlot
                  host {
                    avatar
                    firstName
                    lastName
                    id
                  }
                  id
                  location
                  locationName
                  img
                  price
                  startDate
                  slot
                }
              `,
            });
            console.log(newEventRef);
            return {
              ...existingEvents,
              edges: [
                {
                  __typename: "EventEdge",
                  cursor: createEvent?.id,
                  node: newEventRef,
                },
                ...existingEvents.edges,
              ],
            };
          },
        },
      });
    },
  });
};

export default useCreateEvent;
