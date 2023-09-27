<script setup lang="ts">
import heroImg from '~/assets/hero.jpg'
const events = [
  {
    date: 'January 2023',
    factualObservations: [
      'The board opened three sealed bids for a turf conversion project in part of the common area (exact scope not specified). ',
      'Two of the sealed bids were from licensed contractors (bidding $840k and $447k, respectively). ',
      'The third bid was “direct from manufacturer” (i.e., materials only) from “Purchase Green” for $331k. A&R Landscaping is referenced as the likely installer, but without specific details on what the labor would cost, or why A&R did not submit a bid. The Board did note a concern that A&R Landscaping did not have a high enough bid cap to work on the project. At the time, their bid cap was $45k.',
      'The Board approved an amount Not To Exceed $331k.',
    ],
    additionalContext: [
      'Nevada State Contractors Board licensing information indicates that each of the first two contractors that submitted the $840k and $447k bids had bid cap maximums that were sufficient to bid the project.',
      'Path to Prosperity LLC (d/b/a Purchase Green) later informed us that they did not provide a bid to The Fountains. They stated that it came from a “local dealer,” Compound Effect LLC, which does not appear to have a contractors license',
      'It is public record, via the Nevada Secretary of State and the Nevada Contractors Board, that A&R Maintenance and Landscaping LLC and Compound Effect LLC share ownership, as well as an office suite.',
      'The January meeting minutes did not specifically state which contractor was awarded the work; however, A&R Landscaping has installed promotional signs along Watermark Parkway, and their insignia has been visibly present on the work trucks and employee worker clothing throughout the months of August and September.',
    ],
  },
  {
    date: 'February 2023',
    factualObservations: [
      'The board moved to postpone discussion and/or action on common area projects to a later meeting. This decision was influenced by the feedback and concerns voiced by homeowners at the “Homeowner Forum” held the night before. ',
    ],
    additionalContext: [
      'A&R Landscaping, the same company that currently appears to be doing turf conversion along Watermark Parkway, installed hundreds of solar lights in the common areas in early February. ',
      'Following homeowner outcry, the solar lights were removed. Homeowners were advised that the installation of the lights had just been a test pilot. ',
      'In response to concerns raised by homeowners, a “Homeowner Forum" was held the night before the official Board meeting. This Homeowner Forum was not officially on the record, and no notes or meeting minutes were published.  ',
      'No further special meetings, homeowner forums, or surveys have been held for community feedback. ',
      'The May 2023 meeting minutes reference A&R providing a $28k credit to the Fountains after the removal of the solar lights. Published meeting minutes do not contain information about the original cost, or subsequent net cost, of the solar light pilot; nor do they reflect a vote to approve the solar light pilot prior to installation. ',
    ],
  },
  {
    date: 'June 2023',
    factualObservations: [
      'The Board reviewed bids from A&R Landscaping for 10 individual projects, representing a total of over $175k in work. ',
      'A&R submitted 3 individual proposals for Tree Replacement & Removal along Robindale, for an aggregate total of $79,950: center of Robindale ($28,290.00); east of Robindale ($25,830.00); and west of Robindale ($25,830.00). It is noted that one other company had previously submitted a single proposal for $52,750.',
      'A&R submitted 3 individual proposals for Exterior Security Lighting Along Exterior Perimeter, for an aggregate total of $49,100: east of Robindale ($15,300.00); west of Robindale ($15,300.00); and along Green Valley Parkway ($18,500.00). There is no reference to any other company having submitted proposals for this work',
      'The Board noted that A&R’s max bid cap was still $45k at the time of the meeting.',
      'The Board voted to approve $28,290 for A&R to remove and replace trees along the center of Robindale, and agreed to table the majority of A&R’s other proposals until a later date.',
    ],
    additionalContext: [
      'Based on the Fountains’ 2023 Operating Budget, any project in our community that costs ~$30,500 or more requires 3 sealed bids per NRS 116.31086.',
    ],
  },
  {
    date: 'July 2023',
    factualObservations: [
      'The Board approved A&R’s remaining 2 bids for tree replacement (each for $25,830.00), which had been tabled from the June meeting. ',
      'It was noted that the Board had received a proposal from one company (not A&R) to install artificial turf in the center island between the guard shack and the main fountain. The amount of the proposal was not specified, and no other contractors or proposals were referenced. ',
      'The Board approved a Not To Exceed amount of $65k to install artificial turf in the center island between the guard shack and the main fountain.',
    ],
    additionalContext: [
      'The July meeting minutes did not specifically state which contractor was awarded the work to install artificial turf in the center island between the guard shack and the main fountain; however, A&R Landscaping later installed promotional signs in this island, and their insignia was visibly present on the work trucks and employee worker clothing while work was being done in this area.',
      'Based on the Fountains’ 2023 Operating Budget, any project in our community that costs ~$30,500 or more requires 3 sealed bids per NRS 116.31086.',
    ],
  },
]
const lists = [
  {
    title:
      'There have been a large number of common area projects undertaken this year.',
    list: [
      'What is the total cost of these projects? ',
      'Does the total cost of these projects exceed expected grass removal rebates? If so, by how much?',
      'How much money is being drawn out of reserves in order to fund these projects? ',
      'Will the expense of this work trigger a homeowner assessment to replenish the HOA reserve funds? If so, what is the expected amount of that special assessment?',
    ],
  },
  {
    title:
      'Regarding the turf conversion bid process outlined in the January 2023 board meeting minutes: ',
    list: [
      'Were there a total of 3 equivalent bids from 3 duly licensed contractors, as required by NRS 116.31086?',
      'If this project was broken into two parts – one for materials only, and one for installation labor only – were 3 sealed bids reviewed for each part, as required by NRS 116.31086?',
      'Was the Board aware of A&R and Compound Effect‘s common ownership and business associations?',
      'Was the Board concerned that contracting with A&R and/or Compound Effect for turf conversion could possibly violate NRS 624.220 and/or NRS 624.740?',
    ],
  },
  {
    title:
      'Regarding the current project taking place along Watermark Parkway: ',
    list: [
      'When was the final bid submitted?',
      'What was the contract amount and scope of work?',
      'When and by whom was it approved? ',
      'Who is the duly licensed contractor completing the work? ',
      'What was their bid cap at the time that the project was bid? ',
      'What was their bid cap at the time the project started? ',
      'What is their current bid cap? ',
    ],
  },
  {
    title:
      'Regarding the solar lights that were installed (and later removed) along Watermark Parkway: ',
    list: [
      'When was the final bid submitted?',
      'What was the contract amount and scope of work?',
      'When and by whom was it approved? ',
      'Did any other companies submit proposals for this project? ',
    ],
  },
  {
    title:
      'The Nevada State Contractors Board compliance division is available to clarify laws and regulations. Have they provided written answers to any of the following: ',
    list: [
      'Is a contractor legally eligible to bid work that is above their bid cap maximum? ',
      'Is a contractor legally eligible to complete work that is above their bid cap maximum?',
      'Is a contractor legally eligible to bid or complete multiple smaller projects for a single client that, in aggregate, rise above their bid cap maximum? ',
      'Is a contractor legally eligible to bid or complete multiple smaller projects for a single client that, in aggregate, rise above their bid cap maximum, provided that they only work on a single project at a time? ',
      "Does a contractor's bid cap maximum reset after each project? Or each calendar year? Or is it a lifetime maximum? ",
    ],
  },
  {
    title:
      'There appear to be multiple instances of large projects (e.g., tree removal and replacement; exterior perimeter lighting; turf conversion; etc) that are being broken into smaller sub-projects.',
    list: [
      'Why are these projects being broken up into smaller parts? ',
      'Have other contractors submitted proposals for these projects? If so, what was the amount and scope of the alternate proposals? ',
      'Are these projects subject to NRS 624.220, requiring 3 sealed bids? Why or why not?  ',
    ],
  },
]
</script>
<template>
  <div class="bg-gray-900/25 h-full w-full py-6">
    <div
      class="w-full h-full flex flex-col items-center justify-start max-w-5xl mx-auto rounded-xl overflow-hidden"
    >
      <div class="relative bg-slate-900 w-full">
        <div
          aria-hidden="true"
          class="absolute inset-0 overflow-hidden"
        >
          <img
            :src="heroImg"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gray-900 opacity-50"
        />
        <div
          class="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-12 text-center sm:py-24 lg:px-0"
        >
          <h1 class="text-2xl font-bold tracking-tight text-white lg:text-4xl">
            Important Information About The Fountains
          </h1>
        </div>
      </div>
      <div class="w-full bg-white">
        <div class="px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 1: Why does this website exist?
            </p>
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              As homeowners in The Fountains, we all deserve transparency around
              the way our money is being spent.
            </h1>
            <p class="mt-6 text-xl leading-8">
              This is NOT a forum to discuss landscaping design, or to debate
              the merits of grass vs. plastic turf vs. desert landscaping. The
              purpose of this website is to inform the community about important
              issues – and to empower homeowners to speak up about any
              questions, concerns, or feedback.
            </p>
            <div class="mt-10 border border-slate-700 w-full p-2">
              <p class="text-xl font-bold">
                IMPORTANT: The regularly scheduled board meeting is on Thursday,
                September 28th. We strongly encourage all homeowners to attend.
                If you do not ask questions or voice your concerns, you will
                never be heard!
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 2: Legal Considerations
            </p>

            <p class="mt-6 text-xl leading-8">
              There are many Nevada state laws that govern work done by
              contractors and/or commissioned on behalf of community
              associations such as The Fountains POA.
            </p>
            <p class="mt-5 text-xl leading-8">
              Below are a few specific statutes that are important for
              homeowners to be aware of:
            </p>
            <div class="mt-2 w-full">
              <h1
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              >
                <a
                  href="https://www.leg.state.nv.us/nrs/nrs-624.html#NRS624Sec220"
                  target="_blank"
                  class="underline flex flex-row items-center justify-start space-x-2 text-indigo-600"
                >
                  <Icon
                    class="w-4 h-4"
                    name="solar:link-bold"
                  />
                  <span>NRS 624.220</span>
                </a>
              </h1>
              <p class="mt-5 text-xl leading-8">
                <span class="italic">Summary:</span>
                Every Nevada contractor is issued a maximum amount they can bid
                with an individual client. The limit represents the maximum
                contract a licensed contractor may undertake on one or more
                construction contracts on a single construction site or
                subdivision site for a single client. The Fountains POA would be
                considered one client.
              </p>
            </div>
            <div class="mt-2 w-full">
              <h1
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              >
                <a
                  href="https://www.leg.state.nv.us/nac/nac-624.html#NAC624Sec640"
                  target="_blank"
                  class="underline flex flex-row items-center justify-start space-x-2 text-indigo-600"
                >
                  <Icon
                    class="w-4 h-4"
                    name="solar:link-bold"
                  />
                  <span>NAC 624.640</span>
                </a>
              </h1>
              <p class="mt-5 text-xl leading-8">
                <span class="italic">Summary:</span>
                If a contractor bids and/or performs work that is above their
                max bid limit, that contract is null and void.
              </p>
            </div>
            <div class="mt-2 w-full">
              <h1
                class="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              >
                <a
                  href="https://law.justia.com/codes/nevada/2022/chapter-116/statute-116-31086/"
                  target="_blank"
                  class="underline flex flex-row items-center justify-start space-x-2 text-indigo-600"
                >
                  <Icon
                    class="w-4 h-4"
                    name="solar:link-bold"
                  />
                  <span> NRS 116.31086</span>
                </a>
              </h1>
              <p class="mt-5 text-xl leading-8">
                <span class="italic">Summary:</span>
                This statute requires any HOA spending 3% or more of their
                annual budget on a single project to get three blind bids for
                that project. These bids must be sealed and opened during an
                official board meeting. Based on the Fountains’ 2023 Operating
                Budget, this statute would apply to any project in our community
                that costs ~$30,500 or more.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 3: A Timeline Of Key Events in 2023
            </p>
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              The factual observations below are strictly based on the official,
              ratified Board meeting minutes from 2023.
            </h1>

            <div
              v-for="(event, eventIdx) in events"
              :key="eventIdx"
            >
              <p class="mt-6 text-xl font-semibold leading-8">
                <span class="italic">{{ event.date }}:</span>
              </p>

              <div class="italic mt-6 text-xl leading-8">
                Factual Observations:
              </div>
              <ul class="">
                <li
                  class="mt-2 text-xl leading-8"
                  v-for="observation in event.factualObservations"
                  :key="observation"
                >
                  &bull; {{ observation }}
                </li>
              </ul>

              <div class="italic mt-6 text-xl leading-8">
                Additional Context:
              </div>
              <ul class="">
                <li
                  class="mt-2 text-xl leading-8"
                  v-for="additional in event.additionalContext"
                  :key="additional"
                >
                  &bull; {{ additional }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bg-white px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 4: Potential Questions for the Board
            </p>
            <div class="mt-10 border border-slate-700 w-full p-2">
              <p class="text-xl font-bold">
                IMPORTANT: The regularly scheduled board meeting is on Thursday,
                September 28th. We strongly encourage all residents to attend.
                If you do not ask questions or voice your concerns, they will
                never be heard!
              </p>
            </div>

            <p class="mt-6 text-xl leading-8">
              Based on the Factual Observations and Additional Context outlined
              above, here are some questions that homeowners may wish to ask the
              Board:
            </p>

            <div
              v-for="list in lists"
              :key="list.title"
            >
              <p class="mt-6 text-xl font-semibold leading-8">
                {{ list.title }}
              </p>
              <ul class="">
                <li
                  class="mt-2 text-xl leading-8"
                  v-for="item in list.list"
                  :key="item"
                >
                  &bull; {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 5: Licensing & Contact Information:
            </p>

            <p class="mt-6 text-xl leading-8">
              A&R Maintenance & Landscaping LLC<br />
              NV Contractors License #0086507<br />
              <a
                href="https://arlandscapinglv.com/"
                target="_blank"
                class="text-indigo-600"
                >https://arlandscapinglv.com/</a
              ><br />
              <br />
              Compound Effect LLC (Noted as “Purchase Green” in Board meeting
              minutes)<br />
              <a
                href="https://www.purchasegreen.com/locations/henderson-nv/"
                target="_blank"
                class="text-indigo-600"
                >https://www.purchasegreen.com/locations/henderson-nv/</a
              >

              RPMG<br />
              http://www.rpmginc.com/ Deyna Chavez-Asel<br />
              License #:CAM.0009321-SUPR<br />
              <a
                href="mailto:dchavez-asel@rpmginc.com"
                class="text-indigo-600"
                >dchavez-asel@rpmginc.com</a
              ><br />
              <a
                href="tel:7029337764"
                class="text-indigo-600"
                >(702) 933-7764</a
              ><br />
            </p>
          </div>
        </div>

        <div class="bg-white px-6 py-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p class="text-base font-semibold leading-7 text-indigo-600">
              Part 6: Next Steps
            </p>
            <p class="mt-6 text-xl leading-8">
              A Homeowner Petition for a Special Meeting has already been
              submitted to the Board and our management company, RPMG. This
              petition was signed by more than the 10% of homeowners required.
            </p>
            <p class="mt-6 text-xl leading-8">
              Additionally, a formal request has been submitted for copies of
              all contracts pertaining to common area projects for the last 18
              months.
            </p>
            <p class="mt-6 text-xl leading-8">
              Both of these items are pending action from the Board and RPMG.
            </p>
            <div class="mt-10 border border-slate-700 w-full p-2">
              <p class="text-xl font-bold">
                IMPORTANT: The regularly scheduled board meeting is on Thursday,
                September 28th. We strongly encourage all residents to attend.
                If you do not ask questions or voice your concerns, they will
                never be heard!
              </p>
            </div>
          </div>
        </div>
        <div class="px-6 py-6 lg:px-8 text-center text-gray-400">
          <a
            href="mailto:info@fountainsneighborhood.com"
            class="text-indigo-600"
            >info@fountainsneighborhood.com</a
          ><br />
          Fountains Neighborhood, {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
  </div>
</template>
